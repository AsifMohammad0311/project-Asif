package Filehandling;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class filehandlingexample2  {
	public static void main(String[] args) throws IOException {	
		FileReader fr=new FileReader("C://Users//asifm//OneDrive//Desktop//example1.csv");
		BufferedReader br=new BufferedReader(fr);
		String s=br.readLine();
		while(s!=null){
			System.out.println(s);
			System.out.println(s.replace(","," "));
			s=br.readLine();
		}
	   fr.close();
   }
}



