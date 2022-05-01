import axios from 'axios';

import { BASE_URL, FetchUsers } from '../components/axios';

jest.mock('axios');


describe('fetchUsers', () => {

    test('returns users list', async () => {
        
        // data
        const users = [
            {
                id: 1,
                name: "Ibrahim",
            },
            {
                id: 2,
                name: "Musa"
            },
            {
                id: 3,
                name: "Sylvester"
            }
        ]

        axios.get.mockResolvedValueOnce(users);

        const results = await FetchUsers();

        expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
        
        expect(results).toEqual(users);
    })
})

