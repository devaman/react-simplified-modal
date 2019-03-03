# react-simplified-modal

[![npm](https://img.shields.io/npm/v/react-simplified-modal.svg)](https://www.npmjs.com/package/react-simplified-modal)
![npm](https://img.shields.io/npm/dw/react-simplified-modal.svg)
![GitHub issues](https://img.shields.io/github/issues/devaman/react-simplified-modal.svg)
![GitHub pull requests](https://img.shields.io/github/issues-pr/devaman/react-simplified-modal.svg)
[![HitCount](http://hits.dwyl.io/devaman/react-simplified-modal.svg)](http://hits.dwyl.io/devaman/react-simplified-modal)

## Import the modal.

```js
import Modal from 'react-simplified-modal';
```
## Usage

```js
 <Modal open={this.state.open} onCloseClicked={this.toggleState} onBackDropClicked={this.toggleState}><h1>Hellox</h1></Modal>
 ```

 ## Props

 open : _boolean_

 onCloseClicked : _callback function called on cross clicked_
 
 onBackDropClicked : _callback function called on backdrop clicked_
