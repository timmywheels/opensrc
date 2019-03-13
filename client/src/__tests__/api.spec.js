jest.mock('./__mocks__/api.spec.js');

import * as api from "./__mocks__/api.spec";



it('returns user data object', () => {
    expect.assertions(1)
    return api.fetchDataByUserId()
        .then(res => {
            expect(res.login).toEqual('timwheelercom');
        })
})

