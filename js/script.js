// Copyright (c) 2023 Lamees Hemdan All rights reserved
//
// Created by: Lamees Hemdan
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked () {
  // this program adds sequential numbers up to the user input
  // input
  const userNumber = parseInt(document.getElementById("number").value)

  // process
  let answer = 0
  for (let Counter = 0; Counter <= userNumber; Counter++) {
    answer = answer + Counter
  }

  // output
  document.getElementById('answer').innerHTML = "The answer is: " + answer
}
  