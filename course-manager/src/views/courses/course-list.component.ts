import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
	templateUrl: "./course-list.component.html"
})
export class CourseListComponent implements OnInit {

	filteredCourses: Course[] = [];
	_courses: Course[] = [];

    _filterBy: string = "";

	constructor(private courseService: CourseService) {}

	ngOnInit(): void {
		this.retrieveAll();

	}

	retrieveAll(): void {
		this.courseService.retrieveAll().subscribe({
			next: course => {
				this._courses = course;
				this.filteredCourses = this._courses;
			},
			error: error => console.log("Error", error)
		});
	}

	deleteById(id: number): void {
		this.courseService.deleteById(id).subscribe({
			next: () => {
				console.log("Deleted with success")
				// Aqui seria feito um indexOf e um slice
				this.retrieveAll();
			},
			error: error => console.log("Error", error)
		})
	}

	get filter() {
		return this._filterBy;
	}

	set filter(value: string) {
		this._filterBy = value;
		this.filteredCourses = this._courses.filter((course: Course) => course.name
													.toLocaleLowerCase()
													.indexOf(this._filterBy
													.toLowerCase()) > -1 || course.code
													.toLowerCase()
													.indexOf(this._filterBy
													.toLowerCase()) > -1)
	}

}
