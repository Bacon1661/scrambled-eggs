mod scrambles;
pub use scrambles::*;
pub use cubes::*;

//  This is only here for testing purposes 
fn main() {
    println!("{}", one::generate(1, "test")[0]);
}
