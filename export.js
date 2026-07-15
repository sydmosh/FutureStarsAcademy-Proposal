// export.js – generate PDF of the full proposal
// Requires html2pdf.js (included via CDN in index.html)

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('exportPdf');
  if (!btn) return;

  btn.addEventListener('click', function () {
    const element = document.body; // capture the whole page
    const opt = {
      margin:       [0.5, 0.5, 0.5, 0.5], // inches
      filename:     'Future_Stars_Proposal.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    // Show simple feedback
    btn.disabled = true;
    btn.textContent = 'Generating...';
    html2pdf().set(opt).from(element).save().then(() => {
      btn.disabled = false;
      btn.textContent = 'Export to PDF';
    }).catch(err => {
      console.error('PDF generation error:', err);
      btn.disabled = false;
      btn.textContent = 'Export to PDF';
      alert('Failed to generate PDF. Check console for details.');
    });
  });
});
