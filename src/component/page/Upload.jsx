import React, { Component } from 'react';

import '../../css/upload.css';
import laddaupp from '../../assets/icons/laddaupp.png';
import nylektion from '../../assets/icons/nyLektion.png';
import upload from '../../assets/icons/upload.png';

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
          <h4>Lektion</h4>
          <a class="removeLecture" href="">Ta bort lektion</a>
          <div class="row">

              <div class="well">
                  <form action="">
                    <div class="input-group">
                      <div class="flexContainer lectionInputs">
                        <input type="text" class="form-control" placeholder="Kursnamn*" name=""/>
                        <input type="text" class="form-control" placeholder="Ditt namn*" name=""/>
                      </div>
                      <textarea class="form-control lectionText" rows="3" id="" placeholder="Sammanfattning av lektion*"></textarea>
                      <div class="imgBox">
                        <div class="">
                          <img class="" src="" >
                          <p>Ladda upp video</p>
                        </div>
                        <div class="">
                          <img class="" src="" />
                          <p>Ladda upp ljud</p>
                        </div>
                      </div>

                    </div>
                  </form>
              </div>
            </div>
          `;
    document.getElementById('posts').appendChild(div);

    //var table = document.getElementByClass('');

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
              <a className="removeLecture" href="">Ta bort lektion</a>
              <div className="row">

                  <div className="well">
                      <form action="">
                        <div className="input-group">
                          <div className="flexContainer lectionInputs">
                            <input type="text" className="form-control" placeholder="Kursnamn*" name=""/>
                            <input type="text" className="form-control" placeholder="Ditt namn*" name=""/>
                          </div>
                          <textarea className="form-control lectionText" rows="3" id="" placeholder="Sammanfattning av lektion*"></textarea>
                          <div className="imgBox">
                            <div className="">
                              <img className="" src={upload} />
                              <p>Ladda upp video</p>
                            </div>
                            <div className="">
                              <img className="" src={upload} />
                              <p>Ladda upp ljud</p>
                            </div>
                          </div>

                        </div>
                      </form>
                  </div>
                </div>

                <div id="posts"></div>
              </div>

              <hr />
              <div className="lectionBtns">
                <button onClick={this.createLecture} className="btn btn-default createLecture"><img src={nylektion} />Ny lektion</button>
                <button className="btn btn-default removeBtn">Rensa lektioner</button>
              </div>
              <div className="">
                <button className="btn btn-default upload"> <span class="glyphicon glyphicon-upload"></span>Ladda upp kurs</button>
              </div>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    )
  }
}

export default Upload;
