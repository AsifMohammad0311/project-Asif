package Filehandling;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

public class Filehandlingexample {

	public static void main(String[] args) throws IOException{
		FileReader fr= new FileReader("C://Users//asifm//OneDrive//Desktop//sample.txt");
		int i;
		String text="";
		while ((i=fr.read()) !=-1) {
			System.out.println((char)i);
			text+=(char)i;
		}
		Files.write(Paths.get("C://Users//asifm//OneDrive//Desktop//sample1.txt"),text.getBytes(),StandardOpenOption.APPEND);
	}

}
