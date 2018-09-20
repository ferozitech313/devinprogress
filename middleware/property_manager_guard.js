export default function ({ store, redirect }) {

    if(store.state.auth){
        if (store.state.auth.accessType !== 'Property Manager') {
            redirect('/login')
        }
    }else{

        redirect('/login')
    }



}