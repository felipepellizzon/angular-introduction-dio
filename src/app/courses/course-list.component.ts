import { Component, OnInit } from "@angular/core";
import { Course } from "./course"

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];


    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageurl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 40,
                rating: 4,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageurl: '/assets/images/http.png',
                price: 45.99,
                code: 'LKL-1995',
                duration: 80,
                rating: 4.5,
                releaseDate: 'November, 22, 2019'
            }
        ]
    }

}