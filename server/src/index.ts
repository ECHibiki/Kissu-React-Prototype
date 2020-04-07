import express from "express"

import { Model } from './model/model';
import { Controller } from './controller/controller';
import { View } from './view/view';

//TODO: switches to let var and const
//TODO: import cleanup
//TODO: variable signatures kind of strange

let app = express();
let model = new Model();
let view = new View(model);
let controller = new Controller(app, model, view);
