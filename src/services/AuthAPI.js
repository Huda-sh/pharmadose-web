import API from "@/services/API.js";

export default {
    regiter(form) {
        let data = {
            name: form.name,
            email: form.email,
            password: form.password,
            is_admin: form.isAdmin
        }
        return API().post('auth/register', data)
    },
    login(form){
        let data = {
            email: form.email,
            password: form.password
        };
        return API().post('auth/login', data)
    }
}