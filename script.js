document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.getAttribute('data-tab');

    // Remove active de todos os botões
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

    // Adiciona active no botão clicado
    button.classList.add('active');

    // Esconde todos os conteúdos
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Mostra o conteúdo da aba selecionada
    const selectedContent = document.getElementById(tab);
    if (selectedContent) {
      selectedContent.classList.add('active');
    }
  });
});
