'use strict';

require('./style.scss');

import Parrot from './parrot';

let parrot = new Parrot();

parrot.summon(document.body);
