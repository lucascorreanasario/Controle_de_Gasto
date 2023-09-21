//descrição
document.getElementById('recordAudio').addEventListener('click', function () {
    const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition || window
      .mozSpeechRecognition || window.msSpeechRecognition)();
  
    recognition.lang = 'pt-BR';
    recognition.start();
  
    recognition.onresult = function (event) {
      texto.value = event.results[0][0].transcript;
    };
  
    recognition.onerror = function (event) {
      alert('Erro ao gravar o áudio: ' + event.error);
    };
  });
  