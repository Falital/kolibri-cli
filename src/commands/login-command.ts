/*
* Copyright 2021 HMS Industrial Networks AB
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http: //www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


import { Command } from 'bandersnatch';

export class LoginCommand extends Command {
    constructor() {
        super('login', { description: 'Login to the Kolibri Broker' });
        this.option('user', { description: 'Username', optional: true, type: 'string' });
        this.option('password', { description: 'Password', optional: true, type: 'string' });
        this.option('interval', { description: 'Interval', type: 'number', default: 60 });
        this.option('timeout', { description: 'Timeout', type: 'number', default: 5 });
    }
}
