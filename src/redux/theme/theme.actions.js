import { CHANGE_THEME_MODE } from "../CONSTANTS";


export const changeThemeMode = (mode) => async (dispatch) => {
    dispatch({
        type: CHANGE_THEME_MODE,
        payload: { mode },
    })
}

// // Get all the members of the organization.
// export const getOrganizationMembers = (orgId) => async (dispatch) => {
//     try {
//       const res = await api.get(`/users/org/${orgId}`);
//       dispatch({
//         type: GET_ORG_MEMBERS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };