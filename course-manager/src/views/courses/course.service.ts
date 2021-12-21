import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

@Injectable({
	providedIn: "root"
})
export class CourseService {

	constructor(private httpClient: HttpClient) {}

	private coursesUrl: string = "http://localhost:3100/api/courses";

	retrieveAll(): Observable<Course[]> {
		return this.httpClient.get<Course[]>(this.coursesUrl);
	}

	retrieveById(id: Number): Observable<Course> {
		return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
	}

	save(course: Course): Observable<Course> {
		if(course.id){
			return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course)
		} else {
			return this.httpClient.post<Course>(`${this.coursesUrl}`, course)
		}
	}

	deleteById(id: Number): Observable<any> {
		return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`)
	}
}
