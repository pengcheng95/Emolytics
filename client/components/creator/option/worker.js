self.addEventListener('message', (event) => {
  let emoData = event.data;
	let result;
	let emotions = {
	    emotionAvg: [['Anger'],['Contempt'],['Disgust'],['Fear'],['Happiness'],['Neutral'],['Sadness'],['Surprise']],
	    attention: ['Attention'],
	    count: [],
	    emotionPerc: {
	      Anger: 0,
	      Contempt: 0,
	      Disgust: 0,
	      Fear: 0,
	      Happiness: 0,
	      Neutral: 0,
	      Sadness: 0,
	      Surprise: 0
	   	}
	};

  let total = data.length;
  emoData.forEach(data => {
    emotions.emotionAvg[0].push(parseFloat(data.Anger));
    emotions.emotionAvg[1].push(parseFloat(data.Contempt));
    emotions.emotionAvg[2].push(parseFloat(data.Disgust));
    emotions.emotionAvg[3].push(parseFloat(data.Fear));
    emotions.emotionAvg[4].push(parseFloat(data.Happiness));
    emotions.emotionAvg[5].push(data.Neutral/10);
    emotions.emotionAvg[6].push(parseFloat(data.Sadness));
    emotions.emotionAvg[7].push(parseFloat(data.Surprise));
    emotions.attention.push(data.Attention);
    emotions.count.push(data.Count)
    for (feeling in data) {
      if (feeling === "Neutral") {
        emotions.emotionPerc[feeling] += data[feeling] / 10;
      } else {
        emotions.emotionPerc[feeling] += parseFloat(data[feeling]);
      }
    }
  })
  for (feeling in emotions.emotionPerc) {
    emotions.emotionPerc[feeling] = (emotions.emotionPerc[feeling] / total).toFixed(5);
  }


	self.postMessage(emotions);
}) 