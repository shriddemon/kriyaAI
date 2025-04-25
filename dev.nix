nix
    { pkgs ? import <nixpkgs> {} }:
    
    let
      pythonPackages = pkgs.python311Packages;
    in
    pkgs.mkShell {
      packages = with pkgs; [
        nodejs
        nodePackages.npm
        pythonPackages.pyngrok
        # Add more packages here if you need them in the future
      ];
    }