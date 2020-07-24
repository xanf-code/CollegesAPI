import { College } from "../types.ts";

// Static Data (will be moved to database later on)
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

const getCollege = ({ params , response }: { params: { id : string}, response: any }) => {
    const college : College | undefined = colleges.find(c => c.id === params.id)

    if( college ){
        response.status = 200
        response.body = {
            success : true,
            data : college
        }
    } else {
        response.status = 404
        response.body = {
            success : false,
            msg : 'College not found'
        }
    }
}

// ADD college
// @route GET /api/v1/colleges/

const addCollege = ({ response }: { response: any }) => {
  response.body = "add";
};

// UPDATE college
// @route PUT /api/v1/colleges/:id

const updateCollege = ({response }: { response: any }) => {
    response.body = 'update'
};

// DELETE college
// @route DELETE /api/v1/colleges/:id

const deleteCollege = ({ response }: { response: any }) => {
    response.body = 'delete'
};

export { getColleges,getCollege,addCollege,updateCollege,deleteCollege }