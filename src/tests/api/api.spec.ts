
import { UserService } from 'services'

it("Api testing", async function () {
    const response = await UserService.getUser()

    expect(response[0].coffe).toEqual(0)

})
