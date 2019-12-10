import React, { Component } from 'react';
import PersonalPortfolio from './PersonalPortfolio'

export default class App extends Component {

  constructor () {
    super();
  }

  render = () => {
    return (
      <div>
        <PersonalPortfolio/>
      </div>
    );
  }
}

// component did update = state güncellendikten sonra çalışır ve did update içinde setstate kullanılmaz. Kullanılırsa eğer sonsuz döngüye girer
// component will mount = component birleşmeden hemen önce çalışır.
// component did mound = component render olduktan sonra çalışır.
// should component update = iki parametre alır. nextprops, nextstate, bir önceki state veya propsu, yeni state veya props ile 
  //karşılaştırır eğer true dönerse componentin render fonksiyonu çalışır, eğer false dönerse componentin render fonksiyonu çalışmaz