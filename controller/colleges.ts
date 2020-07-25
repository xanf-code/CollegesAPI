import { Client } from "https://deno.land/x/postgres/mod.ts";
import { College } from "../types.ts";
import { dbCreds } from "../config/config.ts"

//Initialize Client
const client = new Client(dbCreds);

// Static Data (will be moved to database later on)
let colleges: College[] = [
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

const getColleges = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: colleges,
  };
};

// GET single college
// @route GET /api/v1/colleges/:id

const getCollege = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const college: College | undefined = colleges.find((c) => c.id === params.id);

  if (college) {
    response.status = 200;
    response.body = {
      success: true,
      data: college,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "College not found",
    };
  }
};

// ADD college
// @route GET /api/v1/colleges/

const addCollege = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  const college = body.value;

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No Data found",
    }
  } else {
    try {
    await client.connect();
    const result = await client .query(
    "INSERT INTO Colleges(name,type,established) VALUES($1,$2,$3)",
    college.name,
    college.type,
    college.established,

    response.status = 201 ,
    response.body = {
      success : true,
      data : college
    }
  );
    }catch (err) {
      response.status = 500,
      response.body = {
        success : false,
        msg : err.toString()
      }
    } finally {
      await client.end()
    }
  }
};

// UPDATE college
// @route PUT /api/v1/colleges/:id

const updateCollege = async (
  { response, params, request }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const college: College | undefined = colleges.find((c) => c.id === params.id);
  if (college) {
    const body = await request.body()
    const updateData : {name ?: string , type ?: string , established  ?: number } = body.value

    colleges = colleges.map(p => p.id === params.id ? {...p , ...updateData}: p)
    response.status = 200;
    response.body = {
        success : true,
        data : colleges
    }
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "College not found",
    };
  }
};

// DELETE college
// @route DELETE /api/v1/colleges/:id

const deleteCollege = ({ response , params }: { params : {id: string} ,response: any }) => {
  colleges = colleges.filter(c => c.id !== params.id)
    response.status = 200;
    response.body = {
    success: true,
    msg : "college deleted"
    }
};

export { getColleges, getCollege, addCollege, updateCollege, deleteCollege };
