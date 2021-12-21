import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarModule } from 'src/shared/components/star/star.module';
import { PipeModule } from 'src/shared/pipe/pipe.module';

import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';

@NgModule({
	declarations: [
	  CourseListComponent,
	  CourseInfoComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		StarModule,
		PipeModule,
		RouterModule.forChild([
			{ path:	"courses", component: CourseListComponent },
			{ path: "courses/info/:id", component: CourseInfoComponent }
		])
	]
})
export class CourseModule {}
