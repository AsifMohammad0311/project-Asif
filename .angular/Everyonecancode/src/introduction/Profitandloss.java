package introduction;

import java.util.Scanner;

public class Profitandloss {

	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		System.out.println("Enter  total cost price");
		int cp=sc.nextInt();
		System.out.println("Enter manufacturing percentage");
		float mp=sc.nextInt();
		System.out.println("Enter  distributor percentage ");
		float dp=sc.nextInt();
		System.out.println("Enter  retailer percentage ");
		float rp=sc.nextInt();
		System.out.println("Enter  discount percentage ");
		float dip=sc.nextInt();
		
		float customerprice=(((100+mp)/100)*((100+dp)/100)*((100+rp)/100))*cp;
		float mrp = customerprice*(100/(100-dip));
		System.out.println("totalprofit of item "+mrp);
		
		
		
		
	}

}
