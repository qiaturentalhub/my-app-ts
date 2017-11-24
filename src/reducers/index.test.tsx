import { enthusiasm } from "./index";

import { StoreState } from "../types/index";

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { incrementEnthusiasm, decrementEnthusiasm } from "../actions/index";

configure({ adapter: new Adapter() });

it('adds enthusiasmLevel properly from 1 to 2', () => {
    const toTest: StoreState = enthusiasm({
        enthusiasmLevel: 1,
        languageName: 'TypeScript'
    }, incrementEnthusiasm());

    const expected: StoreState = {
        enthusiasmLevel: 2,
        languageName: 'TypeScript'
    }
    expect(toTest).toEqual(expected);
});

it('decreases enthusiasmLevel properly from 2 to 1', () => {
    const toTest: StoreState = enthusiasm({
        enthusiasmLevel: 2,
        languageName: 'TypeScript'
    }, decrementEnthusiasm());

    const expected: StoreState = {
        enthusiasmLevel: 1,
        languageName: 'TypeScript'
    }
    expect(toTest).toEqual(expected);
});

it('does not change from 1 to 0', () => {
    const toTest: StoreState = enthusiasm({
        enthusiasmLevel: 1,
        languageName: 'TypeScript'
    }, decrementEnthusiasm());

    const expected: StoreState = {
        enthusiasmLevel: 1,
        languageName: 'TypeScript'
    }
    expect(toTest).toEqual(expected);
});

it('decrements properly at large numbers', () => {
    const toTest: StoreState = enthusiasm({
        enthusiasmLevel: 99999999999999,
        languageName: 'TypeScript'
    }, decrementEnthusiasm());

    const expected: StoreState = {
        enthusiasmLevel: 99999999999998,
        languageName: 'TypeScript'
    }
    expect(toTest).toEqual(expected);
});

it('increments properly at large numbers', () => {
    const toTest: StoreState = enthusiasm({
        enthusiasmLevel: 99999999999998,
        languageName: 'TypeScript'
    }, incrementEnthusiasm());

    const expected: StoreState = {
        enthusiasmLevel: 99999999999999,
        languageName: 'TypeScript'
    }
    expect(toTest).toEqual(expected);
});