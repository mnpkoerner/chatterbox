import compare from './Results.js'
import count from './Results.js'


describe('testing compare', () => {

    //test for all events 'KOAN_DETAILS'
    test('API returns Synonyms !Rhymes', () => {
        const synonymTest = ['one', 'two'];
        const rhymeTest = undefined
        expect(compare(rhymeTest, synonymTest)).toEqual(
            ['Your search didn\'t dig up anything too good, here\'s some synonyms instead', 'one', 'two']
        )
    })

})
