import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { StudentListComponent } from './student-list/student-list.component';  
import { AddStudentComponent } from './add-student/add-student.component';  
import { UpdateStudentComponent } from './update-student/update-student.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
  
const routes: Routes = [  
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },  
  { path: 'welcome', component: WelcomeComponent },  
  { path: 'students', component: StudentListComponent },  
  { path: 'add-student', component: AddStudentComponent },
  { path: 'update-student/:id', component: UpdateStudentComponent},
  { path: 'student-attendance', component: StudentAttendanceComponent}
];  
  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { }  
