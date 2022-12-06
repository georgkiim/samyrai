import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {v1} from "uuid";
import state, {addPost, RootStateType} from "./redux/state";
import {render} from "./render";



render(state)