import React from 'react';
import ReactDOM from 'react-dom';

class TeacherList extends React.Component {
    teachers: Teacher[];
    showTeachers()
    {
            this.teachers = this.getTeachers();
    }
    getTeachers() {
        return this.http.get('http://localhost:9016/api/v1/teachers')
          .map(response => response.json());
      }
  }

  interface Teacher {
    teacherId: string,
    name: string,
    lastname: string,
    title: string,
    age: number,
    isFullTime: boolean,
    updatedOn: Date
  }
  