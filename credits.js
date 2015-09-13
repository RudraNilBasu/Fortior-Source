#pragma strict

function Update () 
{
	if(Input.GetKey(KeyCode.Space))
	{
		Application.LoadLevel("menu"); // Loading the Level named "menu"
	}
}
