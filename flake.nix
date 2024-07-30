{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/23.11";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = {self, nixpkgs, flake-utils} :
    flake-utils.lib.eachSystem ["x86_64-linux"]
      (system:
        let
          pkgs = import nixpkgs { system = system; };
          # allPackages = import ./default.nix {
          #   pkgs = pkgs;
          #   urweb = urweb.defaultPackage.${system};
          #   urweb-curl = urweb-curl;
          # };
        in
          {
            devShell = pkgs.mkShell {
              name = "school-env";
              buildInputs = [
                             pkgs.nodejs_21
                             pkgs.python3
                             pkgs.lua
                            ];
              shellHook = ''
              '';
            };
          }
      );
}
