  function baixarCurriculo() {
    const link = document.createElement('a');
    link.href = './assets/Lucas - FrontEnd (9).docx';
    link.download = 'curriculo-lucas.docx.docx'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

