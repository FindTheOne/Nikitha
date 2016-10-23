package com.service;

import javax.ws.rs.*;
import javax.ws.rs.core.*;

import org.codehaus.jettison.json.JSONObject;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

@Path("/login")
public class login {

	@POST
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED,MediaType.APPLICATION_JSON})
	@Produces(MediaType.APPLICATION_JSON)
	public Response loginFunction ( String incomingData ) throws Exception {
		//JSONObject partsData = new JSONObject(incomingData);
		MongoClientURI mongoLab = new MongoClientURI("mongodb://admin:admin@ds011459.mlab.com:11459/cmpe295b");
		MongoClient client;
		client = new MongoClient(mongoLab);
		DB database = client.getDB("cmpe295b");
		DBCollection collection = database.getCollection("userDetails"); 
		
		JSONObject partsData = new JSONObject(incomingData);
		System.out.println("input data: "+partsData.getString("username"));
		System.out.println("input data: "+partsData.getString("password"));
		
		BasicDBObject query = new BasicDBObject();
		query.put("username",partsData.getString("username"));
		query.put("password",partsData.getString("password"));
		DBCursor cursor = collection.find(query);
		
		JSONObject obj = new JSONObject();
		
		if (!cursor.hasNext()) {
			obj.put("success", false);
			obj.put("error", true);
			obj.put("message", "user not found");
			
		}
		else {
			obj.put("success", true);
			obj.put("error", false);
			obj.put("message", "user authenticated");
			
		}
		
		return Response.ok(obj.toString()).build();
	}
	

}
