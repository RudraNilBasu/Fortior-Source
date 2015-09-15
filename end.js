#pragma strict

var particles : GameObject;

function Start()
{
	
}

function OnTriggerEnter2D(coll : Collider2D)
{
	if(coll.tag=="Player")
	{
		Instantiate(particles, transform.position, transform.rotation);
		yield WaitForSeconds(2);
		Application.LoadLevel(Application.loadedLevel+1);
	}
}
