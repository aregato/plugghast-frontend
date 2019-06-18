import React, { Component } from 'react';

import '../../css/upload.css';
import help from '../../assets/test-images/helpVid.png';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.lectureNumber= 1;  // I declare the variable here
  }


  createLecture = () => {
    this.lectureNumber = this.lectureNumber + 1;

    var number = "Lektion " + this.lectureNumber;
    var div = document.createElement('div');
    console.log(number);

    div.innerHTML = `
          <div class="col-lg-11 col-md-11 col-sm-11">
          <h4>Lektion {number}</h4>
            <div class="well">
                <form action="">
                  <div class="input-group">
                    <div class="flexContainer lectionInputs">
                      <input type="text" class="form-control" placeholder="Kursnamn*" name=""/>
                      <input type="text" class="form-control" placeholder="Ditt namn*" name=""/>
                    </div>
                    <textarea class="form-control lectionText" rows="3" id="" placeholder="Sammanfattning av lektion*"></textarea>
                  </div>
                </form>
                </div>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1">
            </div>
          </div>
    `;

    document.getElementById('posts').appendChild(div);

  }


  render() {
    return(
      <div>
        <div className="container">
          <h1>Ladda upp kurs</h1>
          <hr />
          <h4>Kursinformation</h4>
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-9">
                <div className="well upload">
                  <form action="">
                    <div className="input-group">
                      <div className="flexContainer">
                        <input type="text" className="form-control courseName"  placeholder="Kursnamn*" name=""/>
                        <input type="checkbox" className="courseBox" name=""/>
                        <label className="">Visa annonser</label>
                      </div>
                      <textarea className="form-control area" rows="3" id="comment" placeholder="Sammanfattning av kurs*"></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <img src={help} alt="help" />
              </div>
            </div>
            <hr />
            <div>
              <h4>Lektion 1</h4>

              <div className="row">

                <div className="col-lg-11 col-md-11 col-sm-11">
                  <div className="well">
                      <form action="">
                        <div className="input-group">
                          <div className="flexContainer lectionInputs">
                            <input type="text" className="form-control" placeholder="Kursnamn*" name=""/>
                            <input type="text" className="form-control" placeholder="Ditt namn*" name=""/>
                          </div>
                          <textarea className="form-control lectionText" rows="3" id="" placeholder="Sammanfattning av lektion*"></textarea>
                        </div>
                      </form>
                      </div>
                  </div>
                  <div className="col-lg-1 col-md-1 col-sm-1">
                  </div>
                </div>

                <div id="posts"></div>
              </div>

              <hr />
              <div className="lectionBtns">
                <button onClick={this.createLecture} className="btn btn-default">Ny lektion</button>
                <button className="btn btn-default">Ta bort lektion</button>
              </div>
              <div className="">
                <button className="btn btn-default upload">Ladda upp kurs</button>
              </div>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    )
  }
}

export default Upload;
