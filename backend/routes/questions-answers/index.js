var express = require('express');
var router = express.Router();

//GET /question
router.get("/", function(req, res, next) {
  res.json({
  	response: "You sent me GET request to /question"
  });
});

//POST /question
//Route for creating question
router.post("/", function(req, res, next) {
  res.json({
  	response: "You sent me POST request to /question",
  	body: req.body
  });
});

//GET /question/:id
//Route for specific question
router.get("/:qID", function(req, res, next) {
  res.json({	
  	response: "You sent me GET request to /question/" + req.params.qID
  });
});

//************************** ANSWER ****************************//

//POST to /question/qID/answer
//Route for creating an answer to specific question
router.post('/:qID/answer', function(req, res) {
	res.json({
		response: "You sent me PUT request to /question/:qID/answer",
		questionID: req.params.qID
	})
})

//PUT to /question/qID/answer/aID
//Route for creating an update answer to specific question
router.put('/qID/answer/aID', function(req, res) {
	res.json({
		response: "You sent me PUT request to /question/qID/answer/aID",
		questionID: req.params.qID,
		answerID: req.params.aID,
		body: req.body
	})
})

//DELETE /question/qID/answer/aID
//Route for deleting an answered question
router.delete('/qID/answer/aID', function(req, res) {
	res.json({
		response: "You sent me DELETE request to /question/qID/answer/aID",
		questionID: req.params.qID,
		answerID: req.params.aID,
		body: req.body
	})
})

//POST /question/:id/answer/:id/vote-:dir
//Route for voteup on specified question and answer
router.delete('/qID/answer/aID/vote-:dir', function(req, res) {
	res.json({
		response: "You sent me POST request to /question/qID/answer/aID/vote-:dir" + req.parms.dir,
		questionID: req.params.qID,
		answerID: req.params.aID,
		vote: req.params.dir
	})
})

module.exports = router;