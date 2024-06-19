import Server from '../src/models/server';
jest.mock( '../src/models/server' );

describe('should call server with arguments and start', () => {

    test('should work', async() => {

        await import( '../src/app' );
        
        expect( Server ).toHaveBeenCalledTimes( 1 );
        expect( Server.prototype.listen ).toHaveBeenCalledWith();
    });

})