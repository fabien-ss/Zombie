const Replicate = require("replicate");

// ilay token tokony atao anaty variable environnement fa tsy eo
export const replicate = new Replicate(
  {  auth: process.env.REPLICATE, });