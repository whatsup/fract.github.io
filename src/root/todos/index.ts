import { Fractal } from 'whatsup'
import { STORE_KEY } from './const'
import { AppData } from './app/app'
import { App } from './app/app'

export class Todos extends Fractal<any> {
    readonly app: App

    constructor() {
        super()
        const data = JSON.parse(localStorage.getItem(STORE_KEY) || '{}') as AppData
        this.app = new App(data)
    }

    *whatsUp() {
        while (true) {
            const data = yield* this.app.data

            localStorage.setItem(STORE_KEY, JSON.stringify(data))

            yield yield* this.app
        }
    }
}
