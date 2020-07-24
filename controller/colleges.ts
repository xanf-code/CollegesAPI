import { College } from "../types.ts";

let colleges : College[] = [
  {
    id: "1",
    name: "Bangalore Institute of technology",
    type: "VTU",
    established: 1950,
  },
  {
    id: "2",
    name: "BMS Institute of technology",
    type: "Autonomous",
    established: 1920,
  },
  {
    id: "3",
    name: "PES Institute of technology",
    type: "University",
    established: 2019,
  },
];

// GET all colleges
// @route GET /api/v1/colleges/

const getColleges = ({response}: {response: any}) =>{
    response.body = {
        success: true,
        data : colleges
    }
}

// GET single college
// @route GET /api/v1/colleges/:id

const getCollege = ({ response }: { response: any }) => {
    response.body = 'get'
}

// ADD college
// @route GET /api/v1/colleges/

const addCollege = ({ response }: { response: any }) => {
    response.body = 'getSingle'
};

// UPDATE college
// @route PUT /api/v1/colleges/:id

const updateCollege = ({ response }: { response: any }) => {
    response.body = 'update'
};

// DELETE college
// @route DELETE /api/v1/colleges/:id

const deleteCollege = ({ response }: { response: any }) => {
    response.body = 'delete'
};

export { getColleges,getCollege,addCollege,updateCollege,deleteCollege }