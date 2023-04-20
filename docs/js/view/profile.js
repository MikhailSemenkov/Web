export default class ProfileView {

    static display(body, user) {
        body.innerHTML = `<div class="h-100 d-flex align-items-center justify-content-center">
            <div class="container py-4 px-4" style="background-color: white; border-radius: 0.75rem; max-width: 450px;">
                <div class="row justify-content-center">
                    <div class="col-auto px-0">
                        <h3 class="text-end"> Profile </h3>
                    </div>
                    <div class="col-auto px-0">
                        <a class="btn text-begin px-1 pt-1" role="button" id="editProfileBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
                
                <table class="table table-hover">
                    <tbody>` +
                        `<tr>
                            <th scope="row"/>
                            <td> Username </td>
                            <th> ` + user.username + ` </th>
                        </tr>
                        <tr>
                            <th scope="row"/>
                            <td> Email address </td>
                            <th> ` + user.email + ` </th>
                        </tr>
                        <tr>
                            <th scope="row"/>
                            <td> Gender </td>
                            <th> ` + ((user.gender == 0)? `` : user.gender) + ` </th>
                        </tr>
                        <tr>
                            <th scope="row"/>
                            <td> Birthdate </td>
                            <th> ` + user.birthdate + ` </th>
                        </tr>` + 
                    `</tbody>
                </table>
            </div>
        </div>`;
    }
}