const nothing = Symbol()

export class Lazy<A> {
	private _value: A | typeof nothing = nothing
	constructor(private readonly f: () => A) {}

	get value(): A {
		if (this._value === nothing) {
			this._value = this.f()
		}
		return this._value
	}
}