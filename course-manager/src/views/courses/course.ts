export class Course {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	code: string;
	duration: number;
	rating: number;
	releaseDate: string;
	description: string;

	constructor(
		id = 0,
		name = "",
		imageUrl = "",
		price = 0,
		code = "",
		duration = 0,
		rating = 0,
		releaseDate = "",
		description = "") {

		this.id = id;
		this.name = name;
		this.imageUrl = imageUrl;
		this.price = price;
		this.code = code;
		this.duration = duration;
		this.rating = rating;
		this.releaseDate = releaseDate;
		this.description = description;
	}
}
