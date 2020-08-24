//Tugas No.1
class Movie {
	constructor (title, category, duration) {
		this.title = title;
		this.duration = duration;
		this.category = category;
	}

	watch() {
		return `Kamu menonton film ${this.title} dengan kategori ${this.category} berdurasi ${this.duration}`
	}
};


//object instance
let movie1 = new Movie('Suspicious Partner', 'Romance', '60 minutes');


console.log(movie1.title);
console.log(movie1.duration);
console.log(movie1.category);
console.log(movie1.watch());


//Tugas No.2


class SoundTrack extends Movie{
	constructor(title, category, duration, titleSong, singer) 
		{
		super(title, duration, category);
		this.titleSong = titleSong;
		this.singer = singer;
	}

	movieSoundtrack(){
		return `Film ${this.title} memiliki lagu soundtrack berjudul ${this.titleSong} yang dinyanyikan oleh ${this.singer}`
	}
}

let soundTrack1 = new SoundTrack('Suspicious Partner', 'Romance', '60 minutes', 'How do you feel', 'Ridho Majid');


console.log(soundTrack1.movieSoundtrack());



//Tugas 3
class Channel extends Movie{
	constructor(title, category, duration, channelName) 
		{
		super(title, duration, category);
		this.channelName = channelName;
	}

	streamAt(){
		return `Film ${this.title} ditayangkan di ${this.channelName}`
	}
}

let channel1 = new Channel('Suspicious Partner', 'Romance', '60 minutes', 'Netflix');


console.log(channel1.streamAt());


