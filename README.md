This is a starter template for [Ionic](http://ionicframework.com/docs/) and google's firebase projects.
This template allows you to save countless hour recreating a user account system. 
The systems flexibility allows you to reuse the template through multiple projects at a time.

Login Screen               |  Register Screen
:-------------------------:|:-------------------------:
![](https://thedumbestdino.com/images/1.png)  |  ![](https://thedumbestdino.com/images/3.png)


# Features: #
1. Firebase email login and registration
2. Forgot password / email recovery system
3. Google account sign-up/login system
4. Facebook account sign-up/login 
5. Simple and easy to customize.


## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Clone a repository with `git clone `

```bash
$ git clone https://github.com/vishal-addweb/firebasedemo.git
$ npm install
```
Then install angularfire2 and firebase using Below Command

```bash
$ npm install firebase@4.6.0 --save
$ npm install angularfire2@5.0.0-rc.3 --save

```
Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```
For run the project

```bash
 $ ionic serve
```
Substitute ios for android if not on a Mac.

Insert your firebase config details into src/app/app.module.ts (lines 26-31)
