# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.hostname = "opensanca"
  config.vm.box = "hashicorp/precise32"
  config.vm.network "private_network", ip: "192.168.120.155"
  config.vm.synced_folder ".", "/opensanca"
end
