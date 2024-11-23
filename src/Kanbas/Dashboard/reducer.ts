import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollments: [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },

        addEnrollment: (state, { payload }) => {
            const { courseId, userId } = payload;
            const newEnrollment = {
                "_id": new Date().getTime().toString(),
                "user": userId,
                "course": courseId
            };

            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        removeEnrollment: (state, { payload }) => {
            const { courseId, userId } = payload;

            state.enrollments = state.enrollments.filter(
                (e: any) => !(e.course === courseId && e.user === userId)
            );
        },
    },
});

export const { setEnrollments, addEnrollment, removeEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;