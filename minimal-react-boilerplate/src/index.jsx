import React from 'react';
import ReactDOM from 'react-dom';


function tick() {
    const element = <h1>I'm a clock: {new Date().toLocaleTimeString()}</h1>;

    ReactDOM.render(element,
        document.getElementById('ticktock')
    );
}

setInterval(tick, 1000);

ReactDOM.render(<h1>I replaced a div!</h1>,
    document.getElementById('replacetext')
);

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    if(this.state.isToggleOn)
      {
       this.getTeachers();
    }
    else
      {
        ReactDOM.render(<p></p>,
          document.getElementById('teachers_results'));
      }   
  
  }
  getTeachers() {
  var teacherlist = [];
    fetch('http://localhost:9016/api/v1/teachers').then((resp) => resp.json())
    .then(function(data) {
      
      let teachers = data;

      teachers.map(function(teacher, index){
        var temp= teacher.isFullTime;
        if(teacher.isFullTime == true)
          {
            temp = "true";
          }
          else
            {
              temp = "false";
            }

        teacherlist[index] = <ul>
          <li>Teacher ID:{teacher.teacherId}</li>
          <li>First Name:{teacher.name}</li>
          <li>Last Name:{teacher.lastname}</li>
          <li>Title: {teacher.title}</li>
          <li>Age: {teacher.age}</li>
          <li>Version: {teacher.__v}</li>
          <li>Updated On: {teacher.updatedOn}</li>
          <li>Is Full Time: {temp}</li>
          </ul>;
      })
      
      ReactDOM.render(<div>{teacherlist}</div>,document.getElementById('teachers_results'));
    })
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Toggle Show' : 'Toggle Show'}
      </button>
      </div>
    );
  }
}

  ReactDOM.render(
    <Toggle />,
    document.getElementById('teachers')
  );

