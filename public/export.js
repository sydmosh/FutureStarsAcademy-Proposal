// export.js – Enhanced PDF generation for the full proposal

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('exportPdf');
  if (!btn) return;

  btn.addEventListener('click', async function () {
    // Show loading state
    btn.disabled = true;
    const originalContent = btn.innerHTML;
    btn.innerHTML = `
      <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
        </path>
      </svg>
      <span>Generating PDF...</span>
    `;

    try {
      // Dynamically import html2pdf.js if not already loaded
      let html2pdfLib = window.html2pdf;
      
      if (!html2pdfLib) {
        // Wait for script to load
        await new Promise((resolve, reject) => {
          const script = document.querySelector('script[src*="html2pdf"]');
          if (script) {
            script.addEventListener('load', resolve);
            script.addEventListener('error', reject);
          } else {
            // Script might already be loaded
            setTimeout(resolve, 100);
          }
        });
        html2pdfLib = window.html2pdf;
      }

      if (!html2pdfLib) {
        throw new Error('html2pdf.js library not loaded');
      }

      // Prepare the element for PDF - use body but exclude UI elements
      const element = document.body.cloneNode(true);
      
      // Remove elements that shouldn't be in PDF
      const toRemove = element.querySelectorAll(
        '.progress-bar, .theme-toggle, .export-btn, .back-to-top, .hdr .nav, .nav-toggle, .nav-overlay, #navOverlay, .iframe-skeleton'
      );
      toRemove.forEach(el => el.remove());
      
      // Remove sticky positioning from header
      const header = element.querySelector('.hdr');
      if (header) {
        header.style.position = 'static';
        header.style.boxShadow = 'none';
        header.style.borderBottom = '2px solid var(--accent-primary)';
      }
      
      // Make all sections visible and remove transforms
      const sections = element.querySelectorAll('.section');
      sections.forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'none';
        section.style.pageBreakInside = 'avoid';
        section.style.breakInside = 'avoid';
      });
      
      // Hide iframes
      const iframes = element.querySelectorAll('iframe');
      iframes.forEach(iframe => iframe.style.display = 'none');

      // Configure PDF options
      const opt = {
        margin: [0.6, 0.6, 0.6, 0.6], // inches
        filename: 'Future_Stars_Academy_Proposal.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true,
          logging: false,
          letterRendering: true,
        },
        jsPDF: { 
          unit: 'in', 
          format: 'a4', 
          orientation: 'portrait',
          putOnlyUsedFonts: true,
        },
        pagebreak: { 
          mode: ['avoid-all', 'css', 'legacy'],
          avoid: ['.section', 'table', 'tr']
        }
      };

      // Generate and save PDF
      await html2pdfLib().set(opt).from(element).save();
      
    } catch (err) {
      console.error('PDF generation error:', err);
      alert('Failed to generate PDF. Please try again or check console for details.');
    } finally {
      // Restore button
      btn.disabled = false;
      btn.innerHTML = originalContent;
    }
  });
});